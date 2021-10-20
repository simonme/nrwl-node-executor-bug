async function bootstrap() {
  console.log('First log');
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);

  console.log('Second log');
}

bootstrap();
