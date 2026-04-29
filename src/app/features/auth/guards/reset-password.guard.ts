import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const resetPasswordGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const queryParams = state.root.queryParams;

  // We check in the actual route since queryParams needs to be read at runtime
  return true;
};
