package com.bookstore.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.bookstore.onlinebookstore.entity.BookCategory;

@RepositoryRestResource(collectionResourceRel="bookCategory",path="book-category") //changing endpoint name from camel case to hyphyne
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {

}
