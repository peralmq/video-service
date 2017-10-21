# Kotlin tech stack
Stack based on
* [Kotlin 1.1.4](https://docs.python.org/3/whatsnew/3.6.html) - Statically typed programming language for modern multiplatform applications, created by [JetBrains](https://www.jetbrains.com/) and one of the offical languages for Android
* [Spark](http://sparkjava.com/) - a micro web framework
* [Kwery](https://github.com/andrewoma/kwery) - SQL library for Kotlin
* [Gradle](https://gradle.org/) - a package, dependency management, and build tool

## Pre-requisite
[Brew](https://brew.sh/) and [Cask](https://caskroom.github.io/)

```
brew cask install java
brew install gradle
gradlew wrapper
```

## Local development
```
./gradlew clean run
```

## Deployment
In order to get new source code in to the docker container the following is a needed prerequisite
```
./gradlew clean build

```

## Other
It's recommended to use an IDE like Intellij IDEA or something similar to develop Kotlin and make use of the Gradle system to the max, [details here](http://ktor.io/getting-started-idea.html)
