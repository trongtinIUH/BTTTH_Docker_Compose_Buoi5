#!/usr/bin/env bash
# filepath: wait-for-it.sh

set -e

host="$1"
port="$2"
shift 2
cmd="$@"

while ! nc -z "$host" "$port"; do
  echo "Waiting for $host:$port to be ready..."
  sleep 1
done

exec $cmd