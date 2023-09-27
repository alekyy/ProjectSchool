import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '@app/shared/models/course';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  baseURL = `${environment.apiURL}courses`;

  constructor(private http: HttpClient) {}

  getCourses(
    currentPage: number,
    pageSize: number,
    search: string,
    category: string
  ): Observable<HttpResponse<any>> {
    let url = `${this.baseURL}?_page${currentPage}&_limit=${pageSize}`;

    if (category) {
      url = `${url}&category=${category}`;
    }

    if (search) {
      url = `${url}&q=${search}`;
    }

    return this.http
      .get<Course[]>(`${url}`, { observe: 'response' })
      .pipe(take(1));
  }

  getCoursesById(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseURL}/${id}`).pipe(take(1));
  }

  postCourse(course: Course): Observable<Course[]> {
    return this.http.post<Course[]>(`${this.baseURL}`, course).pipe(take(1));
  }

  putCourse(course: Course, id: number): Observable<Course[]> {
    return this.http
      .put<Course[]>(`${this.baseURL}/${id}`, course)
      .pipe(take(1));
  }

  deleteCourse(id: number): Observable<Course[]> {
    return this.http.delete<Course[]>(`${this.baseURL}/${id}`).pipe(take(1));
  }
}
