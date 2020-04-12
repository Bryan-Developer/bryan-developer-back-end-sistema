process.env.PORT = process.env.PORT || 7000;
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';
process.env.CADUCIDAD_TOKEN = process.env.CADUCIDAD_TOKEN || '24h';
process.env.NODE_ENVIROMENT = process.env.NODE_ENVIROMENT || 'development';
process.env.URL_DB = process.env.NODE_ENVIROMENT === 'development' ? 'mongodb://localhost:27017/sistema-tienda' : process.env.MONGO_URI;