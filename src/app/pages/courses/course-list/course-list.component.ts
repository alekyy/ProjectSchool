import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { CoursesService } from '@app/services/courses.service';
import { Category, Course } from '@app/shared/models/course';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  courseList: Course[] = [];
  categoryValue = Object.values(Category);

  totalCount: number = 0;
  currentPage: number = 0;
  pageSize: number = 0;

  form!: FormGroup;
  private fb = inject(FormBuilder);

  private courseService = inject(CoursesService);

  get f(): any {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.validation();

    this.form.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      if (value) {
        this.getCourses(
          this.currentPage,
          this.pageSize,
          this.f.category.value ?? '',
          this.f.search.value ?? ''
        );
      }
    });

    this.getCourses(1, 5, '', '');
  }

  private validation(): void {
    this.form = this.fb.group({
      category: [''],
      search: [''],
    });
  }

  getCourses(
    currentPage: number,
    pageSize: number,
    search: string,
    category: string
  ) {
    this.courseService
      .getCourses(currentPage, pageSize, search, category)
      .subscribe((response) => {
        this.courseList = response.body as Course[];
        let totalCount = response.headers.get('X-Total-Count');
        this.totalCount = totalCount ? Number(totalCount) : 0;
      });
  }

  doSearch() {
    this.getCourses(
      this.currentPage,
      this.pageSize,
      this.f.category.value ?? '',
      this.f.search.value ?? ''
    );
  }

  handlePageEvent(e: PageEvent) {
    this.currentPage = e.pageIndex + 1;
    this.pageSize = e.pageSize;

    this.getCourses(
      this.currentPage,
      this.pageSize,
      this.f.category.value ?? '',
      this.f.search.value ?? ''
    );
  }
}
