package se.timewellspent

import com.beust.klaxon.*
import spark.*

var storage = mutableMapOf<String, Models.Track>()

var counter = 0

class Models {
    class Track(val id: String, val url: String) {
        companion object {
            fun fromJsonString(id: String, s: String): Track {
                val url = (Parser().parse(s.byteInputStream()) as JsonObject).string("url")
                return Track(id, url ?: "")
            }
        }

        fun toJsonString(): String {
            return JsonObject(mapOf(
                "id" to this.id,
                "url" to this.url
            )).toJsonString()
        }
    }
}

class Controllers {
    fun root(req: Request, res: Response): String {
        return "Hello from Spark Kotlin!"
    }

    fun createTrack(req: Request, res: Response): String {
        val id = "${counter++}"
        val track = Models.Track.fromJsonString(id, req.body())
        storage[id] = track
        res.status(201)
        return track.toJsonString()
    }

    fun showTrack(req: Request, res: Response): Any {
        val id = req.params("id")
        return storage[id]?.let { track ->
            res.status(200)
            track.toJsonString()
        } ?: res.status(404)
    }
}

class Router {
    init {
        Spark.staticFiles.location("/public")
        val controllers = Controllers()
        Spark.get("/api/", controllers::root)
        Spark.post("/api/tracks/", controllers::createTrack)
        Spark.get("/api/tracks/:id", controllers::showTrack)
    }
}

fun main(args: Array<String>) {
    Router()
}
