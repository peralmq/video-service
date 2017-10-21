package se.timewellspent

import com.beust.klaxon.*
import spark.*

var storage = mutableMapOf<String, Models.Post>()

var counter = 0

class Models {
    class ParserException(message: String): Exception(message)
    data class File(val name: String, val type: String) {
        companion object {
            fun fromJsonString(j: JsonObject?): File {
                j?.let {
                    val name = j.string("name")
                    val type = j.string("type")
                    if (!name.isNullOrEmpty() && !type.isNullOrEmpty()) {
                        return File(name!!, type!!)
                    }
                }

                throw ParserException("Unable to parse File")
            }
        }

        fun toMap(): Map<String, String> {
            return mapOf(
                    "name" to this.name,
                    "type" to this.type
            )

        }
    }
    data class Video(val data: String, val file: File) {
        companion object {
            fun fromJsonString(j: JsonObject?): Video {
                j?.let {
                    val file = File.fromJsonString(j.obj("file"))
                    val data = j.string("data")
                    if (!data.isNullOrEmpty()) {
                        return Video(data!!, file)
                    }
                }

                throw ParserException("Unable to parse Video")
            }
        }

        fun toMap(): Map<String, *> {
            return mapOf(
                    "data" to this.data,
                    "file" to this.file.toMap()
            )

        }
    }
    class Post(val id: String, val title: String, val description: String, val video: Video) {
        companion object {
            fun fromJsonString(id: String, s: String): Post {
                val json = Parser().parse(s.byteInputStream()) as JsonObject
                val video = Video.fromJsonString(json.obj("video"))
                val title = json.string("title")
                val description = json.string("description")
                if (!title.isNullOrEmpty() && !description.isNullOrEmpty()) {

                    return Post(id, title!!, description!!, video)
                }

                throw ParserException("Unable to parse Post")
            }
        }

        fun toJsonString(): String {
            return JsonObject(mapOf(
                "id" to this.id,
                "title" to this.title,
                    "description" to this.description,
                    "video" to this.video.toMap()
            )).toJsonString()
        }
    }
}

class Controllers {
    fun root(req: Request, res: Response): String {
        return "Hello from Spark Kotlin!"
    }

    fun create(req: Request, res: Response): String {
        val id = "${counter++}"
        var post: Models.Post
        try {
            post = Models.Post.fromJsonString(id, req.body())
        } catch (e: Models.ParserException) {
            res.status(400)
            return ""
        }
        storage[id] = post
        res.status(201)
        return post.toJsonString()
    }

    fun show(req: Request, res: Response): Any {
        val id = req.params("id")
        return storage[id]?.let { post ->
            res.status(200)
            post.toJsonString()
        } ?: res.status(404)
    }
}

class Router {
    init {
        Spark.staticFiles.location("/public")
        val controllers = Controllers()
        Spark.get("/api/", controllers::root)
        Spark.post("/api/posts/", controllers::create)
        Spark.get("/api/posts/:id", controllers::show)
    }
}

fun main(args: Array<String>) {
    Router()
}
