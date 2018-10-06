import { Tutorial } from './models/tutorial.model';

export interface ReduxState {
  readonly tutorial: Tutorial[];
}
