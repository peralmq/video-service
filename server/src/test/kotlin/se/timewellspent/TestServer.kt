package se.timewellspent

import com.beust.klaxon.*
import kotlin.test.*
import org.junit.*
import com.github.kittinunf.fuel.Fuel
import spark.Spark

class TestServer {
    companion object {
        @BeforeClass @JvmStatic
        fun before() {
            main(emptyArray())
        }

        @AfterClass @JvmStatic
        fun after() {
            Spark.stop()
        }
    }

    val BASE_URL = "http://localhost:4567/api"

    @Test
    fun testRoot() {
        val actual = Fuel.get("$BASE_URL/").responseString()
        assertEquals(200, actual.second.statusCode)
        assertEquals("Hello from Spark Kotlin!", actual.third.get())
    }

    private val createPostBody = json {
        obj(
                "title" to "A title",
                "description" to "A description",
                "video" to obj(
                        "url" to "http://example.com/video.mp4",
                        "file" to obj(
                                "name" to "A file name",
                                "type" to "video/mp4"
                        )
                )
            )
    }.toJsonString()

    @Test
    fun testCreatePost() {
        val (_, status, responseBody) = Fuel.post("$BASE_URL/posts/").body(createPostBody).responseString()
        assertEquals(201, status.statusCode)
        val id = (Parser().parse(responseBody.get().byteInputStream()) as JsonObject).string("id")
        assertNotNull(id)
    }

    @Test
    fun testGetPost() {
        val (_, _, responseBody) = Fuel.post("$BASE_URL/posts/").body(createPostBody).responseString()
        val id = (Parser().parse(responseBody.get().byteInputStream()) as JsonObject).string("id")
        val expected = json {
            obj(
                    "id" to id,
                    "title" to "A title",
                    "description" to "A description",
                    "video" to obj(
                            "url" to "http://example.com/video.mp4",
                            "file" to obj(
                                    "name" to "A file name",
                                    "type" to "video/mp4"
                            )
                    )
            )
        }.toJsonString()
        val (_, status, responseBody2) = Fuel.get("$BASE_URL/posts/" + id).responseString()
        assertEquals(200, status.statusCode)
        assertEquals(expected, responseBody2.get())
    }

    @Test
    fun testGetPosts() {
        val (_, status, responseBody) = Fuel.get("$BASE_URL/posts/").responseString()
        assertEquals(200, status.statusCode)
        val data = responseBody.get()
        assertNotNull(data)
        assertNotEquals(data , "[]")
        assertTrue(data.startsWith("[{"))
    }
}

