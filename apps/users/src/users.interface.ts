import { UUID } from 'crypto';

export interface User {
  id: UUID;
  email: string;
  full_name: string;
}
