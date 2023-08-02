import { UUID } from 'crypto';

export interface Comment {
  id: UUID;
  message: string;
  user_id: UUID;
  post_id: UUID;
}
