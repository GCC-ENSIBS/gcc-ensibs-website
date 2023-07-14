FROM denoland/deno:1.25.0

WORKDIR /app

COPY . .

EXPOSE 8000

CMD ["run", "-A", "--unstable", "main.ts"]
