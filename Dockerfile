FROM denoland/deno:latest

WORKDIR /app

COPY . .

EXPOSE 8000

CMD ["run", "-A", "--unstable", "main.ts"]
