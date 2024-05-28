const bcrypt = require('bcrypt');
const db = require('./dbconnection'); // Asegúrate de que la ruta sea correcta

// Suponiendo que ya tienes una conexión a la base de datos configurada

const usuarios = [
  { email: 'carlos@example.com', password: 'mypass123' },
  { email: 'ana@example.com', password: 'pass123' },
  { email: 'pedro@example.com', password: 'securePwd' },
  { email: 'maria@example.com', password: 'password123' },
  { email: 'laura@example.com', password: 'pwdLaura45' },
  { email: 'mauricio@gmail.com', password: '12345' },
  { email: 'karen@gmail.com', password: '202asdas2' }
];

(async () => {
  for (const usuario of usuarios) {
    const hashedPassword = await bcrypt.hash(usuario.password, 10);
    await db('Usuario')
      .where('email', usuario.email)
      .update({ passw: hashedPassword });
    console.log(`Contraseña encriptada para ${usuario.email}`);
  }
  console.log('Contraseñas encriptadas exitosamente');
  process.exit(0);
})();
