#!/bin/bash

alias build="npx nx run-many -t build"

git-push() {
    git push
}

git-feat() {
    git add . && git commit -m"feat: $1"
}

git-fix() {
    git add . && git commit -m"fix: $1"
}

git-docs() {
    git add . && git commit -m"docs: $1"
}

git-style() {
    git add . && git commit -m"style: $1"
}

git-refactor() {
    git add . && git commit -m"refactor: $1"
}

git-perf() {
    git add . && git commit -m"perf: $1"
}

git-test() {
    git add . && git commit -m"test: $1"
}
