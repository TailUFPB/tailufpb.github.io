// src/types/csvTypes.ts
export interface Diretoria {
  id_dir: string;
  nome_dir: string;
}
  
export interface Membro {
  id_mem: string;
  id_mem_ins: string;
  nome_mem: string;
  curso_mem: string;
  email_mem: string;
  status_mem: string;
  cargo_mem: string;
  website_mem: string;
}

export interface Projeto {
  id_proj: string;
  nome_proj: string;
  descricao_proj: string;
  tipo_proj: string;
  completo_proj: string;
  link_proj: string;
}

export interface Rotacao {
  id_rot: string;
  id_rot_dir: string;
  id_rot_proj: string;
  periodo_rot: string;
}

export interface RotacaoMembrosFeedback {
  id_rot_mem_fbk: string;
  id_rot_mem_fbk_rotacao: string;
  id_rot_mem_fbk_feedback: string;
  id_rot_mem_fbk_membro: string;
  cargo_rot_mem_fbk: string;
}
