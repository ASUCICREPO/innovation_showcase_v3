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
export default function ChallengesInfoUpdateForm(props) {
  const {
    id: idProp,
    challengesInfo: challengesInfoModelProp,
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
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = challengesInfoRecord
      ? { ...initialValues, ...challengesInfoRecord }
      : initialValues;
    setProjectName(cleanValues.ProjectName);
    setCategory(cleanValues.Category);
    setCustomer(cleanValues.Customer);
    setAWSServices(cleanValues.AWSServices);
    setProjectPic(cleanValues.ProjectPic);
    setProjectInfoURL(cleanValues.ProjectInfoURL);
    setHighlight(cleanValues.Highlight);
    setDemo(cleanValues.Demo);
    setGithub(cleanValues.github);
    setApproach(cleanValues.approach);
    setErrors({});
  };
  const [challengesInfoRecord, setChallengesInfoRecord] = React.useState(
    challengesInfoModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ChallengesInfo, idProp)
        : challengesInfoModelProp;
      setChallengesInfoRecord(record);
    };
    queryData();
  }, [idProp, challengesInfoModelProp]);
  React.useEffect(resetStateValues, [challengesInfoRecord]);
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
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            ChallengesInfo.copyOf(challengesInfoRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ChallengesInfoUpdateForm")}
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || challengesInfoModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || challengesInfoModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
