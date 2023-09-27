import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '@app/shared/models/course';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  baseURL = `${environment.apiURL}courses`;

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseURL}`);
  }

  getCoursesById(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseURL}/${id}`);
  }

  postCourse(course: Course): Observable<Course[]> {
    return this.http.post<Course[]>(`${this.baseURL}`, course);
  }

  putCourse(course: Course, id: number): Observable<Course[]> {
    return this.http.put<Course[]>(`${this.baseURL}/${id}`, course);
  }

  deleteCourse(id: number): Observable<Course[]> {
    return this.http.delete<Course[]>(`${this.baseURL}/${id}`);
  }
}
