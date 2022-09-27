export interface ModalConfig {
  title?: string;
  text?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

export type ModalCallback = (arg1?: any, arg2?: any, arg3?: any) => void;
