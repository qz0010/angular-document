export interface ILogin {
  login: string;
  password: string;
}

export interface IDocument {
  id: string;
  title?: string;
  text?: string;
}

export interface IDocumentApprove {
  approver: string;
  resolution?: string;
  comment?: string;
  state: 1 | 0;
}

export interface IDocumentApproveRes {
  message: string;
}
