import { HttpClient, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize, switchMap } from "rxjs/operators";
import { BaseUrlProviderService } from "./base-url-provider.service";
import { LoadingService } from "../loading/loading.service";

@Injectable()
export abstract class ApiServiceBase {
  constructor(
    public http: HttpClient,
    public baseUrlProvider: BaseUrlProviderService,
    private loading: LoadingService
  ) {}

  public get<T>(relativePath: string, params?: any): Observable<T> {
    this.loading.start();
    return this.baseUrlProvider.getBaseUrl().pipe(
      switchMap(baseUrl => {
        return this.http.get<T>(`${baseUrl}/${relativePath}`, {
          params
        });
      }),
      finalize(() => {
        this.loading.stop();
      })
    );
  }

  public getNoLoader<T>(relativePath: string, params?: any): Observable<T> {
    return this.baseUrlProvider.getBaseUrl().pipe(
      switchMap(baseUrl => {
        return this.http.get<T>(`${baseUrl}/${relativePath}`, {
          params
        });
      }),
      finalize(() => {})
    );
  }

  public post<TBody>(
    relativePath: string,
    body?: TBody,
    params?: any
  ): Observable<any> {
    this.loading.start();
    return this.baseUrlProvider.getBaseUrl().pipe(
      switchMap(baseUrl =>
        this.http.post(
          `${baseUrl}/${relativePath}`,
          {
            ...(body as any)
          },
          { params }
        )
      ),
      finalize(() => {
        this.loading.stop();
      })
    );
  }

  public put<TBody>(
    relativePath: string,
    body?: TBody,
    params?: any
  ): Observable<any> {
    this.loading.start();
    return this.baseUrlProvider.getBaseUrl().pipe(
      switchMap(baseUrl =>
        this.http.put(
          `${baseUrl}/${relativePath}`,
          {
            ...(body as any)
          },
          { params }
        )
      ),
      finalize(() => {
        this.loading.stop();
      })
    );
  }

  public delete(relativePath: string, params?: any): Observable<any> {
    this.loading.start();
    return this.baseUrlProvider.getBaseUrl().pipe(
      switchMap(baseUrl =>
        this.http.delete(`${baseUrl}/${relativePath}`, {
          params
        })
      ),
      finalize(() => {
        this.loading.stop();
      })
    );
  }

  public postFormData<TBody>(
    relativePath: string,
    body?: TBody,
    params?: any
  ): Observable<any> {
    this.loading.start();
    return this.baseUrlProvider.getBaseUrl().pipe(
      switchMap((baseUrl: string) => {
        const uploadReq = new HttpRequest(
          "POST",
          `${baseUrl}/${relativePath}`,
          body as any,
          { reportProgress: true }
        );
        return this.http.request(uploadReq);
      }),
      finalize(() => {
        this.loading.stop();
      })
    );
  }
  public getFile<TBody>(relativePath: string, params?: any): Observable<any> {
    this.loading.start();
    return this.baseUrlProvider.getBaseUrl().pipe(
      switchMap(baseUrl => {
        return this.http.get(`${baseUrl}/${relativePath}`, {
          responseType: "blob",
          params
        });
      }),
      finalize(() => {
        this.loading.stop();
      })
    );
  }
}
