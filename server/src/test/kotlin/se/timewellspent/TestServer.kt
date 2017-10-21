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

    @Test
    fun testRoot() {
        val actual = Fuel.get("http://localhost:4567/").responseString()
        assertEquals(200, actual.second.statusCode)
        assertEquals("Hello from Spark Kotlin!", actual.third.get())
    }

    private val createTrackBody = json {
        obj("url" to "https://example.com")
    }.toJsonString()

    @Test
    fun testCreateTrack() {
        val expected = json {
            obj(
                    "id" to "1",
                    "url" to "https://example.com"

            )
        }.toJsonString()
        val actual = Fuel.post("http://localhost:4567/tracks/").body(createTrackBody).responseString()
        assertEquals(201, actual.second.statusCode)
        assertEquals(expected, actual.third.get())
    }

    @Test
    fun testGetTrack() {
        val (_, _, responseBody) = Fuel.post("http://localhost:4567/tracks/").body(createTrackBody).responseString()
        val id = (Parser().parse(responseBody.get().byteInputStream()) as JsonObject).string("id")
        val expected = json {
            obj(
                    "id" to id,
                    "url" to "https://example.com"

            )
        }.toJsonString()
        val actual = Fuel.get("http://localhost:4567/tracks/" + id).body(createTrackBody).responseString()
        assertEquals(200, actual.second.statusCode)
        assertEquals(expected, actual.third.get())
    }
}

