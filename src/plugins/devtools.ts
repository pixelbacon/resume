import devtools from '@vue/devtools';
import localtunnel from 'localtunnel';

if (process.env.NODE_ENV === 'development') {
  const port = 8089;
  const tunnel = localtunnel(port, (err: any, tunnel: any) => {
    if (err) {
      return;
    }
    devtools.connect(tunnel.url, port);
  });
}
