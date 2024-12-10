/* eslint-disable */

/* tslint:disable */

/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from 'axios';
import axios from 'axios';

export interface CreateUserDto {
  userName: string;
  name: string;
  faimlyName: string;
  age: string;
  grade: string;
  province: string;
  schoolName: string;
  gender: string;
  nsc: string;
  /** @default false */
  isSubscribed: boolean;
  subjectTeaching: string;
  gradeTeaching: string;
  customerId: string;
  email: string;
  password: string;
  role: CreateUserDtoRoleEnum;
}

export interface SigninUserDto {
  email: string;
  password: string;
}

export interface ChangePasswordDto {
  oldPassword: string;
  newPassword: string;
}

export interface ForgotPasswordDto {
  email: string;
}

export interface VerifyPinDto {
  code: string;
}

export interface NewPasswordDto {
  password: string;
}

export type VerifyAndResetPasswordDto = object;

export interface CreateGradeDto {
  title: string;
}

export interface UpdateGradeDto {
  title?: string;
}

export interface CreateSubjectDto {
  title: string;
}

export interface UpdateSubjectDto {
  title?: string;
}

export interface CreateTopicDto {
  title: string;
}

export interface UpdateTopicDto {
  title?: string;
}

export interface CreateQuestionDto {
  question: string;
  answer: string;
  certificateType: string;
  grade: string;
  subject: string;
  assessmentType: string;
  topic: string;
  difficultyLevel: string;
  totalMarks: string;
  type: string;
}

export interface UpdateQuestionDto {
  question?: string;
  answer?: string;
  certificateType?: string;
  grade?: string;
  subject?: string;
  assessmentType?: string;
  topic?: string;
  difficultyLevel?: string;
  totalMarks?: string;
  type?: string;
}

export interface GenerateDescriptionDto {
  /**
   * Text to generate description from
   * @example "Create a math question about quadratic equations for grade 10 students"
   */
  text: string;
  /**
   * Type of generation (question or answer)
   * @example "question"
   */
  type: GenerateDescriptionDtoTypeEnum;
}

export interface CoverDataDto {
  /** URL of the image */
  imageURL?: string;
  /** nsc/ieb name */
  nsc?: string;
  /** Grade */
  grade?: string;
  /** Subject name */
  subject?: string;
  /** Time allocated */
  topic?: string;
  /** Marks obtained */
  totalMarks?: number;
  /** Page obtained */
  page?: number;
  /** Date in the format DD/MM/YYYY */
  date?: string;
  /** Description obtained */
  des?: string;
}

export interface InstructionsDataDto {
  /** Instruction title */
  title: string;
}

export interface IGeneratePdfDto {
  /** Cover data */
  coverData?: CoverDataDto;
  /** Array of instructions data */
  instructionsData: InstructionsDataDto[];
  /**
   * List of item IDs, at least one non-empty string required
   * @minItems 1
   */
  items: string[];
}

export interface QuestionDto {
  items: string[];
}

export enum CreateUserDtoRoleEnum {
  Learner = 'learner',
  Teacher = 'teacher',
}

/**
 * Type of generation (question or answer)
 * @example "question"
 */
export enum GenerateDescriptionDtoTypeEnum {
  Question = 'question',
  Answer = 'answer',
  Algebra = 'algebra',
}

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || 'http://localhost:3000',
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { 'Content-Type': type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Jsdt Backend
 * @version 1.0.0
 * @baseUrl http://localhost:3000
 * @contact
 *
 * JSDT is an examination management platform.
 */
export class JsdtAPI<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @tags Auth
     * @name UsersControllerCreate
     * @summary Sign up
     * @request POST:/auth/signup
     */
    usersControllerCreate: (data: CreateUserDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/signup`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name UsersControllerLogin
     * @summary Log In
     * @request POST:/auth
     */
    usersControllerLogin: (data: SigninUserDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name UsersControllerAdminLogin
     * @summary Admin Log In
     * @request POST:/auth/admin-login
     */
    usersControllerAdminLogin: (data: SigninUserDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/admin-login`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name UsersControllerChangePassword
     * @request POST:/auth/change-password
     * @secure
     */
    usersControllerChangePassword: (data: ChangePasswordDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/change-password`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name UsersControllerForgotPassword
     * @request POST:/auth/forgot-password
     */
    usersControllerForgotPassword: (data: ForgotPasswordDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/forgot-password`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name UsersControllerVerifyPin
     * @request POST:/auth/verify-pin
     */
    usersControllerVerifyPin: (data: VerifyPinDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/verify-pin`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name UsersControllerCreateNewPassword
     * @request POST:/auth/create-new-password
     * @secure
     */
    usersControllerCreateNewPassword: (data: NewPasswordDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/create-new-password`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name UsersControllerHandlePasswordReset
     * @request POST:/auth/verify-and-reset
     */
    usersControllerHandlePasswordReset: (
      data: VerifyAndResetPasswordDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/auth/verify-and-reset`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name UsersControllerFindOne
     * @request GET:/auth/{id}
     */
    usersControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/${id}`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name UsersControllerRemove
     * @request DELETE:/auth/{id}
     */
    usersControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/${id}`,
        method: 'DELETE',
        ...params,
      }),
  };
  grades = {
    /**
     * No description
     *
     * @tags Grades
     * @name GradesControllerCreate
     * @request POST:/grades
     * @secure
     */
    gradesControllerCreate: (data: CreateGradeDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/grades`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Grades
     * @name GradesControllerFindAll
     * @request GET:/grades
     * @secure
     */
    gradesControllerFindAll: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/grades`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Grades
     * @name GradesControllerFindOne
     * @request GET:/grades/{id}
     * @secure
     */
    gradesControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/grades/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Grades
     * @name GradesControllerUpdate
     * @request PATCH:/grades/{id}
     * @secure
     */
    gradesControllerUpdate: (id: string, data: UpdateGradeDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/grades/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Grades
     * @name GradesControllerRemove
     * @request DELETE:/grades/{id}
     * @secure
     */
    gradesControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/grades/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  subject = {
    /**
     * No description
     *
     * @tags subjects
     * @name SubjectControllerCreate
     * @request POST:/subject
     * @secure
     */
    subjectControllerCreate: (data: CreateSubjectDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/subject`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags subjects
     * @name SubjectControllerFindAll
     * @request GET:/subject
     * @secure
     */
    subjectControllerFindAll: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/subject`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags subjects
     * @name SubjectControllerFindOne
     * @request GET:/subject/{id}
     * @secure
     */
    subjectControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/subject/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags subjects
     * @name SubjectControllerUpdate
     * @request PATCH:/subject/{id}
     * @secure
     */
    subjectControllerUpdate: (id: string, data: UpdateSubjectDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/subject/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags subjects
     * @name SubjectControllerRemove
     * @request DELETE:/subject/{id}
     * @secure
     */
    subjectControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/subject/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  topic = {
    /**
     * No description
     *
     * @tags Topics
     * @name TopicControllerCreate
     * @request POST:/topic
     * @secure
     */
    topicControllerCreate: (data: CreateTopicDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/topic`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topics
     * @name TopicControllerFindAll
     * @request GET:/topic
     * @secure
     */
    topicControllerFindAll: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/topic`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topics
     * @name TopicControllerFindOne
     * @request GET:/topic/{id}
     * @secure
     */
    topicControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/topic/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topics
     * @name TopicControllerUpdate
     * @request PATCH:/topic/{id}
     * @secure
     */
    topicControllerUpdate: (id: string, data: UpdateTopicDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/topic/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topics
     * @name TopicControllerRemove
     * @request DELETE:/topic/{id}
     * @secure
     */
    topicControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/topic/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  questions = {
    /**
     * No description
     *
     * @tags Questions
     * @name QuestionsControllerGetQuestion
     * @request GET:/questions
     * @secure
     */
    questionsControllerGetQuestion: (
      query?: {
        certificateType?: string;
        grade?: string;
        subject?: string;
        assessmentType?: string;
        topic?: string;
        difficultyLevel?: string;
        totalMarks?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/questions`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Questions
     * @name QuestionsControllerCreate
     * @request POST:/questions
     * @secure
     */
    questionsControllerCreate: (data: CreateQuestionDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/questions`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Questions
     * @name QuestionsControllerFindOne
     * @request GET:/questions/{id}
     * @secure
     */
    questionsControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/questions/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Questions
     * @name QuestionsControllerUpdate
     * @request PATCH:/questions/{id}
     * @secure
     */
    questionsControllerUpdate: (id: string, data: UpdateQuestionDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/questions/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Questions
     * @name QuestionsControllerRemove
     * @request DELETE:/questions/{id}
     * @secure
     */
    questionsControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/questions/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Questions
     * @name QuestionsControllerGenerateDescription
     * @request POST:/questions/generate-description
     * @secure
     */
    questionsControllerGenerateDescription: (
      data: GenerateDescriptionDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/questions/generate-description`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  pdf = {
    /**
     * No description
     *
     * @tags PDF
     * @name PdfControllerDownloadPdf
     * @request POST:/pdf/download
     * @secure
     */
    pdfControllerDownloadPdf: (data: IGeneratePdfDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/pdf/download`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags PDF
     * @name PdfControllerQuestionAnswerPdf
     * @request POST:/pdf/question
     * @secure
     */
    pdfControllerQuestionAnswerPdf: (
      query: {
        type: string;
      },
      data: QuestionDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/pdf/question`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  upload = {
    /**
     * No description
     *
     * @name UploadControllerUploadMedia
     * @request POST:/upload
     */
    uploadControllerUploadMedia: (
      data: {
        /** @format binary */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/upload`,
        method: 'POST',
        body: data,
        type: ContentType.FormData,
        ...params,
      }),
  };
}
