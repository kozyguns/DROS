import React, { StrictMode } from "react";

import DialogTest from "./../components/ui/DialogTest";

// TypeScript requires that the element is asserted to be non-null.
// The '!' postfix expression operator removes null and undefined from the type.
const rootElement = document.getElementById("root")!;


const DialogPage = () => {
  return (
    <StrictMode>
      <DialogTest />
    </StrictMode>
  );
}
export default DialogPage;
