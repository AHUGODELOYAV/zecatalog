import { FieldObject } from "../components/global/field/Field";

export function fieldValidations(dataField: FieldObject): boolean {
  //IS REQUIRED - VALIDATION
  if (dataField.isRequired) {
    if (!dataField.value[0]) {
      dataField.error[1](true);
      dataField.errorMessage[1]("Please fill in this field");
      return true;
    }
  }
  // EMAIL - VALIDATION
  if (dataField.validationType === "email") {
    const emailFormat =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailFormat.test(dataField.value[0]!.toString())) {
      dataField.error[1](true);
      dataField.errorMessage[1]("Please enter a valid email");
      return true;
    }
  }
  // PASSWORD - VALIDATION
  if (dataField.validationType === "password") {
    // Size validation
    const passLenght = 6;
    if (dataField.value[0].length < passLenght) {
      dataField.error[1](true);
      dataField.errorMessage[1](
        "The password must be equal to or greater than " + passLenght
      );
      return true;
    }
  }
  dataField.error[1](false);
  dataField.errorMessage[1]("");
  return false;
}

export function fieldValidationsCompare(
  dataField1: FieldObject,
  dataField2: FieldObject,
  errorMessage: string
): boolean {
  if (dataField1.value[0] !== dataField2.value[0]) {
    dataField1.error[1](true);
    dataField1.errorMessage[1](errorMessage);
    dataField2.error[1](true);
    dataField2.errorMessage[1](errorMessage);
    return true;
  }

  dataField1.error[1](false);
  dataField1.errorMessage[1]("");
  dataField2.error[1](false);
  dataField2.errorMessage[1]("");
  return false;
}
