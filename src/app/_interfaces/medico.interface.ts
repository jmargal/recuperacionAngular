export interface Medicos {
  ok:      boolean;
  medicos: Medico[];
}

export interface Medico {
  _id:          string;
  nombre:       string;
  especialidad: string;
  telefono:     string;
  aceptaNuevos: boolean;
}
