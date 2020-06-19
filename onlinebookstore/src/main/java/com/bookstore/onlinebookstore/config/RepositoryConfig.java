package com.bookstore.onlinebookstore.config;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.Type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
// this class is used to configure rest repository to add ID(primary key value) in JSON output
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

@Configuration
public class RepositoryConfig implements RepositoryRestConfigurer {
	
	@Autowired
	private EntityManager entityManager;
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		//config.exposeIdsFor(Book.class);  // entity you want to expose IDs of
		//config.exposeIdsFor(BookCategory.class); //rather then doing it seperately for all entities we can use entity manager
		config.exposeIdsFor(entityManager.getMetamodel().getEntities().stream().map(Type::getJavaType).toArray(Class[]::new));
		config.getCorsRegistry().addMapping("/**").allowedOrigins("http://localhost:4200");
		
	}

	
}
