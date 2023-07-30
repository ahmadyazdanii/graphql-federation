import { UUID } from 'crypto';

export interface Comment {
  id: UUID;
  message: string;
}
