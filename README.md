# HNU-6058

## Projet CV   
  
  24/03/2023  
   
 Mon projet pour cet atelier a suivi l'idée proposée par la professeure du cours de créer une page CV sous la forme d'un site avec un formulaire de contact. Un CV est toujours un incontournable pour se faire connaître dans le marché du travail, et une version numérique dynamique constitue un atout. Une page de présentation avec des intéractions et la connectivité de l'hypertexte ajoute une couche supplémentaire qui pourrait même inclure des liens aux réseaux sociaux personnels en tant que forme additionnelle de contact et présentation. Telle solution réduit également la pollution numérique en remplaçant une pièce-jointe par un simple lien dans un courriel, par exemple.   
   
 Le site CV présente une courte présentation biographique sommaire où on trouve deux boutons : l'un nous renvoie vers une autre page avec une structure de CV typique imprimable et l'autre bouton renvoie vers une page formulaire de contact.[^1]  
   
 Le site a été fait en entier en utilisant du HTML et du CSS et un peu de JavaScript pour le formulaire de contact. La structure des pages en HTML est simple et utilise les éléments classiques ainsi que quelques-uns vus lors du cours tels que `<dl>, <dt>, <dd>` et `<svg>`.   
   
Concernant le style et la mise en forme en CSS, on a privilégié les *flex*  et les *grid* pour créer des colonnes et pour assurer la flexibilité nécessaire pour que le contenu s'adapte à la taille de l'écran. On a joué avec les bords et le *box-shadow* pour un rendu plus fin et beau.    
  
Le formulaire de contact a été fait en utilisant les balises `<form>`et `<input>`, et du JavaScript pour les fonctionnalités. Afin de connecter le formulaire à notre service de messagerie électronique, il nous faut un intermédiaire tels que Nodemailer, MailKit, PHPMailer, Context.IO [@WhatAreAlternatives] ou EmailJS (proposé par la professeure). Une connexion directe avec notre service de messagerie est possible mais cela nous expose à des risques de sécurité pour nos boîtes mail personnelles. [@fritzCreateContactForm2022] EmailJS fournit une API pour l'utilisation de ce service, structure qu'on introduit dans le code avec des instructions qui vont lier les valeurs des éléments HTML, notamment l'information introduite dans le champs de texte (*input boxes*), aux variables à passer dans la fonction pourvue par l'API d'EmailJS. Ensuite on ajoute des instructions à mettre en place une fois le formulaire envoyé ainsi que quoi faire en cas d'erreur. Cette dernière opération est appelée promesse et elle va gérer l'état d'une opération asynchrone déjà renvoyée par la fonction de l'API. [@PromessesJavaScript]  
  
En général, un site CV reste un projet simple mais très pratique.   
  
[^1]: Le texte du site reste du faux texte en tant que produit d'un exercice académique ; néanmoins, la structure et la mise en page constituent un bon modèle à utiliser. La structure de la page CV imprimable est la même que celle proposée lors du cours afin de mettre en pratique toutes les techniques montrées, spécialement les colonnes. 
