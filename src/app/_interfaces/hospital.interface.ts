export interface Hospitales {
  ok:         boolean;
  hospitales: Hospitale[];
}

export interface Hospitale {
  _id:       string;
  nombre:    string;
  direccion: string;
  tipo:      string;
}
