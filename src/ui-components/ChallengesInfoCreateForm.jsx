/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ChallengesInfo } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ChallengesInfoCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ProjectName: "",
    Category: "",
    Customer: "",
    AWSServices: "",
    ProjectPic: "",
    ProjectInfoURL: "",
    Highlight: false,
    Demo: "",
    github: "",
    approach: "",
    ProjectName_es: "",
    Category_es: "",
    approach_es: "",
  };
  const [ProjectName, setProjectName] = React.useState(
    initialValues.ProjectName
  );
  const [Category, setCategory] = React.useState(initialValues.Category);
  const [Customer, setCustomer] = React.useState(initialValues.Customer);
  const [AWSServices, setAWSServices] = React.useState(
    initialValues.AWSServices
  );
  const [ProjectPic, setProjectPic] = React.useState(initialValues.ProjectPic);
  const [ProjectInfoURL, setProjectInfoURL] = React.useState(
    initialValues.ProjectInfoURL
  );
  const [Highlight, setHighlight] = React.useState(initialValues.Highlight);
  const [Demo, setDemo] = React.useState(initialValues.Demo);
  const [github, setGithub] = React.useState(initialValues.github);
  const [approach, setApproach] = React.useState(initialValues.approach);
  const [ProjectName_es, setProjectName_es] = React.useState(
    initialValues.ProjectName_es
  );
  const [Category_es, setCategory_es] = React.useState(
    initialValues.Category_es
  );
  const [approach_es, setApproach_es] = React.useState(
    initialValues.approach_es
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setProjectName(initialValues.ProjectName);
    setCategory(initialValues.Category);
    setCustomer(initialValues.Customer);
    setAWSServices(initialValues.AWSServices);
    setProjectPic(initialValues.ProjectPic);
    setProjectInfoURL(initialValues.ProjectInfoURL);
    setHighlight(initialValues.Highlight);
    setDemo(initialValues.Demo);
    setGithub(initialValues.github);
    setApproach(initialValues.approach);
    setProjectName_es(initialValues.ProjectName_es);
    setCategory_es(initialValues.Category_es);
    setApproach_es(initialValues.approach_es);
    setErrors({});
  };
  const validations = {
    ProjectName: [],
    Category: [],
    Customer: [],
    AWSServices: [],
    ProjectPic: [],
    ProjectInfoURL: [],
    Highlight: [],
    Demo: [],
    github: [],
    approach: [],
    ProjectName_es: [],
    Category_es: [],
    approach_es: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          ProjectName,
          Category,
          Customer,
          AWSServices,
          ProjectPic,
          ProjectInfoURL,
          Highlight,
          Demo,
          github,
          approach,
          ProjectName_es,
          Category_es,
          approach_es,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new ChallengesInfo(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ChallengesInfoCreateForm")}
      {...rest}
    >
      <TextField
        label="Project name"
        isRequired={false}
        isReadOnly={false}
        value={ProjectName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName: value,
              Category,
              Customer,
              AWSServices,
              ProjectPic,
              ProjectInfoURL,
              Highlight,
              Demo,
              github,
              approach,
              ProjectName_es,
              Category_es,
              approach_es,
            };
            const result = onChange(modelFields);
            value = result?.ProjectName ?? value;
          }
          if (errors.ProjectName?.hasError) {
            runValidationTasks("ProjectName", value);
          }
          setProjectName(value);
        }}
        onBlur={() => runValidationTasks("ProjectName", ProjectName)}
        errorMessage={errors.ProjectName?.errorMessage}
        hasError={errors.ProjectName?.hasError}
        {...getOverrideProps(overrides, "ProjectName")}
      ></TextField>
      <TextField
        label="Category"
        isRequired={false}
        isReadOnly={false}
        value={Category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              Category: value,
              Customer,
              AWSServices,
              ProjectPic,
              ProjectInfoURL,
              Highlight,
              Demo,
              github,
              approach,
              ProjectName_es,
              Category_es,
              approach_es,
            };
            const result = onChange(modelFields);
            value = result?.Category ?? value;
          }
          if (errors.Category?.hasError) {
            runValidationTasks("Category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("Category", Category)}
        errorMessage={errors.Category?.errorMessage}
        hasError={errors.Category?.hasError}
        {...getOverrideProps(overrides, "Category")}
      ></TextField>
      <TextField
        label="Customer"
        isRequired={false}
        isReadOnly={false}
        value={Customer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              Category,
              Customer: value,
              AWSServices,
              ProjectPic,
              ProjectInfoURL,
              Highlight,
              Demo,
              github,
              approach,
              ProjectName_es,
              Category_es,
              approach_es,
            };
            const result = onChange(modelFields);
            value = result?.Customer ?? value;
          }
          if (errors.Customer?.hasError) {
            runValidationTasks("Customer", value);
          }
          setCustomer(value);
        }}
        onBlur={() => runValidationTasks("Customer", Customer)}
        errorMessage={errors.Customer?.errorMessage}
        hasError={errors.Customer?.hasError}
        {...getOverrideProps(overrides, "Customer")}
      ></TextField>
      <TextField
        label="Aws services"
        isRequired={false}
        isReadOnly={false}
        value={AWSServices}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              Category,
              Customer,
              AWSServices: value,
              ProjectPic,
              ProjectInfoURL,
              Highlight,
              Demo,
              github,
              approach,
              ProjectName_es,
              Category_es,
              approach_es,
            };
            const result = onChange(modelFields);
            value = result?.AWSServices ?? value;
          }
          if (errors.AWSServices?.hasError) {
            runValidationTasks("AWSServices", value);
          }
          setAWSServices(value);
        }}
        onBlur={() => runValidationTasks("AWSServices", AWSServices)}
        errorMessage={errors.AWSServices?.errorMessage}
        hasError={errors.AWSServices?.hasError}
        {...getOverrideProps(overrides, "AWSServices")}
      ></TextField>
      <TextField
        label="Project pic"
        isRequired={false}
        isReadOnly={false}
        value={ProjectPic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              Category,
              Customer,
              AWSServices,
              ProjectPic: value,
              ProjectInfoURL,
              Highlight,
              Demo,
              github,
              approach,
              ProjectName_es,
              Category_es,
              approach_es,
            };
            const result = onChange(modelFields);
            value = result?.ProjectPic ?? value;
          }
          if (errors.ProjectPic?.hasError) {
            runValidationTasks("ProjectPic", value);
          }
          setProjectPic(value);
        }}
        onBlur={() => runValidationTasks("ProjectPic", ProjectPic)}
        errorMessage={errors.ProjectPic?.errorMessage}
        hasError={errors.ProjectPic?.hasError}
        {...getOverrideProps(overrides, "ProjectPic")}
      ></TextField>
      <TextField
        label="Project info url"
        isRequired={false}
        isReadOnly={false}
        value={ProjectInfoURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              Category,
              Customer,
              AWSServices,
              ProjectPic,
              ProjectInfoURL: value,
              Highlight,
              Demo,
              github,
              approach,
              ProjectName_es,
              Category_es,
              approach_es,
            };
            const result = onChange(modelFields);
            value = result?.ProjectInfoURL ?? value;
          }
          if (errors.ProjectInfoURL?.hasError) {
            runValidationTasks("ProjectInfoURL", value);
          }
          setProjectInfoURL(value);
        }}
        onBlur={() => runValidationTasks("ProjectInfoURL", ProjectInfoURL)}
        errorMessage={errors.ProjectInfoURL?.errorMessage}
        hasError={errors.ProjectInfoURL?.hasError}
        {...getOverrideProps(overrides, "ProjectInfoURL")}
      ></TextField>
      <SwitchField
        label="Highlight"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Highlight}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ProjectName,
              Category,
              Customer,
              AWSServices,
              ProjectPic,
              ProjectInfoURL,
              Highlight: value,
              Demo,
              github,
              approach,
              ProjectName_es,
              Category_es,
              approach_es,
            };
            const result = onChange(modelFields);
            value = result?.Highlight ?? value;
          }
          if (errors.Highlight?.hasError) {
            runValidationTasks("Highlight", value);
          }
          setHighlight(value);
        }}
        onBlur={() => runValidationTasks("Highlight", Highlight)}
        errorMessage={errors.Highlight?.errorMessage}
        hasError={errors.Highlight?.hasError}
        {...getOverrideProps(overrides, "Highlight")}
      ></SwitchField>
      <TextField
        label="Demo"
        isRequired={false}
        isReadOnly={false}
        value={Demo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              Category,
              Customer,
              AWSServices,
              ProjectPic,
              ProjectInfoURL,
              Highlight,
              Demo: value,
              github,
              approach,
              ProjectName_es,
              Category_es,
              approach_es,
            };
            const result = onChange(modelFields);
            value = result?.Demo ?? value;
          }
          if (errors.Demo?.hasError) {
            runValidationTasks("Demo", value);
          }
          setDemo(value);
        }}
        onBlur={() => runValidationTasks("Demo", Demo)}
        errorMessage={errors.Demo?.errorMessage}
        hasError={errors.Demo?.hasError}
        {...getOverrideProps(overrides, "Demo")}
      ></TextField>
      <TextField
        label="Github"
        isRequired={false}
        isReadOnly={false}
        value={github}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              Category,
              Customer,
              AWSServices,
              ProjectPic,
              ProjectInfoURL,
              Highlight,
              Demo,
              github: value,
              approach,
              ProjectName_es,
              Category_es,
              approach_es,
            };
            const result = onChange(modelFields);
            value = result?.github ?? value;
          }
          if (errors.github?.hasError) {
            runValidationTasks("github", value);
          }
          setGithub(value);
        }}
        onBlur={() => runValidationTasks("github", github)}
        errorMessage={errors.github?.errorMessage}
        hasError={errors.github?.hasError}
        {...getOverrideProps(overrides, "github")}
      ></TextField>
      <TextField
        label="Approach"
        isRequired={false}
        isReadOnly={false}
        value={approach}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              Category,
              Customer,
              AWSServices,
              ProjectPic,
              ProjectInfoURL,
              Highlight,
              Demo,
              github,
              approach: value,
              ProjectName_es,
              Category_es,
              approach_es,
            };
            const result = onChange(modelFields);
            value = result?.approach ?? value;
          }
          if (errors.approach?.hasError) {
            runValidationTasks("approach", value);
          }
          setApproach(value);
        }}
        onBlur={() => runValidationTasks("approach", approach)}
        errorMessage={errors.approach?.errorMessage}
        hasError={errors.approach?.hasError}
        {...getOverrideProps(overrides, "approach")}
      ></TextField>
      <TextField
        label="Project name es"
        isRequired={false}
        isReadOnly={false}
        value={ProjectName_es}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              Category,
              Customer,
              AWSServices,
              ProjectPic,
              ProjectInfoURL,
              Highlight,
              Demo,
              github,
              approach,
              ProjectName_es: value,
              Category_es,
              approach_es,
            };
            const result = onChange(modelFields);
            value = result?.ProjectName_es ?? value;
          }
          if (errors.ProjectName_es?.hasError) {
            runValidationTasks("ProjectName_es", value);
          }
          setProjectName_es(value);
        }}
        onBlur={() => runValidationTasks("ProjectName_es", ProjectName_es)}
        errorMessage={errors.ProjectName_es?.errorMessage}
        hasError={errors.ProjectName_es?.hasError}
        {...getOverrideProps(overrides, "ProjectName_es")}
      ></TextField>
      <TextField
        label="Category es"
        isRequired={false}
        isReadOnly={false}
        value={Category_es}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              Category,
              Customer,
              AWSServices,
              ProjectPic,
              ProjectInfoURL,
              Highlight,
              Demo,
              github,
              approach,
              ProjectName_es,
              Category_es: value,
              approach_es,
            };
            const result = onChange(modelFields);
            value = result?.Category_es ?? value;
          }
          if (errors.Category_es?.hasError) {
            runValidationTasks("Category_es", value);
          }
          setCategory_es(value);
        }}
        onBlur={() => runValidationTasks("Category_es", Category_es)}
        errorMessage={errors.Category_es?.errorMessage}
        hasError={errors.Category_es?.hasError}
        {...getOverrideProps(overrides, "Category_es")}
      ></TextField>
      <TextField
        label="Approach es"
        isRequired={false}
        isReadOnly={false}
        value={approach_es}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              Category,
              Customer,
              AWSServices,
              ProjectPic,
              ProjectInfoURL,
              Highlight,
              Demo,
              github,
              approach,
              ProjectName_es,
              Category_es,
              approach_es: value,
            };
            const result = onChange(modelFields);
            value = result?.approach_es ?? value;
          }
          if (errors.approach_es?.hasError) {
            runValidationTasks("approach_es", value);
          }
          setApproach_es(value);
        }}
        onBlur={() => runValidationTasks("approach_es", approach_es)}
        errorMessage={errors.approach_es?.errorMessage}
        hasError={errors.approach_es?.hasError}
        {...getOverrideProps(overrides, "approach_es")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
