import { Decimal } from "@prisma/client/runtime/library";

Object.defineProperty(BigInt.prototype, "toJSON", {
  get() {
    "use strict";
    return () => Number(this);
  },
});

Object.defineProperty(Decimal.prototype, "toJSON", {
  get() {
    "use strict";
    return () => Number(this);
  },
});
