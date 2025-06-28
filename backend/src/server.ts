import app from './app';
import config from './config/config';

app.listen(config.PORT, config.HOST, async () => {
  console.log(`Server running on port ${config.PORT}`);
});
