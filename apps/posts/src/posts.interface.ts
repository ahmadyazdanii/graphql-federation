import { UUID } from 'crypto';

export interface Post {
  id: UUID;
  title: string;
  description: string;
}
