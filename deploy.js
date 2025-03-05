const { execSync } = require('child_process');
const path = require('path');

// Функция для выполнения команд
function runCommand(command) {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Ошибка при выполнении команды: ${command}`);
    console.error(error);
    process.exit(1);
  }
}

// Основная функция деплоя
async function deploy() {
  console.log('Начинаем процесс деплоя на Vercel...');
  
  // Сборка проекта
  console.log('\n1. Сборка проекта...');
  runCommand('npm run build');
  
  // Деплой на Vercel
  console.log('\n2. Деплой на Vercel...');
  runCommand('vercel --prod');
  
  console.log('\nДеплой успешно завершен!');
}

// Запуск функции деплоя
deploy().catch(error => {
  console.error('Произошла ошибка при деплое:');
  console.error(error);
  process.exit(1); 