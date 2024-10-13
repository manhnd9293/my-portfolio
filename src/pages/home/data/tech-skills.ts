import nodejs from '@/assets/images/tech-stack/backend/Node.js.png'
import nest from '@/assets/images/tech-stack/backend/nest.png'
import express from '@/assets/images/tech-stack/backend/expressjs.png'
import ts from '@/assets/images/tech-stack/backend/ts.png'
import js from '@/assets/images/tech-stack/backend/js.png'
import mongo from '@/assets/images/tech-stack/backend/mongo.png'
import mysql from '@/assets/images/tech-stack/backend/MySQL.png'
import postgres from '@/assets/images/tech-stack/backend/postgres.png'
import redis from '@/assets/images/tech-stack/backend/redis.png'
import fastify from '@/assets/images/tech-stack/backend/Fastify.png'
import graphql from '@/assets/images/tech-stack/backend/GraphQL.png'
import django from '@/assets/images/tech-stack/backend/Django.png'

import reactjs from '@/assets/images/tech-stack/frontend/React.png'
import tailwind from '@/assets/images/tech-stack/frontend/Tailwind CSS.png'
import vite from '@/assets/images/tech-stack/frontend/Vite.js.png'
import ant from '@/assets/images/tech-stack/frontend/Ant Design.png'
import css from '@/assets/images/tech-stack/frontend/CSS3.png'
import sass from '@/assets/images/tech-stack/frontend/Sass.png'
import bulma from '@/assets/images/tech-stack/frontend/Bulma.png'
import nextjs from '@/assets/images/tech-stack/frontend/Next.js.png'


import aws from '@/assets/images/tech-stack/infrastructure/AWS.png'
import gcp from '@/assets/images/tech-stack/infrastructure/Google Cloud.png'
import linux from '@/assets/images/tech-stack/infrastructure/Linux.png'
import ga from '@/assets/images/tech-stack/infrastructure/GitHub Actions.png'
import docker from '@/assets/images/tech-stack/infrastructure/Docker.png'
import nginx from '@/assets/images/tech-stack/infrastructure/NGINX.png'

export const techSkills = [
  {
    id: 1,
    name: 'Backend',
    techs: [
      {
        name: 'Nodejs',
        imgSrc: nodejs
      },
      {
        name: 'NestJS',
        imgSrc: nest
      },
      {
        name: 'ExpressJs',
        imgSrc: express
      },
      {
        name: 'Fastify',
        imgSrc: fastify
      },
      {
        name: 'GraphQL',
        imgSrc: graphql
      },
      {
        name: 'Typescript',
        imgSrc: ts
      },
      {
        name: 'Javascript',
        imgSrc: js
      },
      {
        name: 'MongoDb',
        imgSrc: mongo
      },
      {
        name: 'MySql',
        imgSrc: mysql
      },
      {
        name: 'PostgresSQL',
        imgSrc: postgres
      },
      {
        name: 'Redis',
        imgSrc: redis
      },
      {
        name: 'Django',
        imgSrc: django
      }
    ]
  },
  {
    id: 2,
    name: 'Frontend',
    techs: [
      {
        name: 'ReactJS',
        imgSrc: reactjs
      },
      {
        name: 'NextJS',
        imgSrc: nextjs
      },
      {
        name: 'Vite',
        imgSrc: vite
      },
      {
        name: 'Ant Design',
        imgSrc: ant
      },
      {
        name: 'Tailwind',
        imgSrc: tailwind
      },
      {
        name: 'SASS',
        imgSrc: sass
      },
      {
        name: 'Bulma CSS',
        imgSrc: bulma
      }
    ]
  },
  {
    id: 3,
    name: 'Infrastructure',
    techs: [
      {
        name: 'AWS',
        imgSrc: aws,
      },
      {
        name: 'GCP',
        imgSrc: gcp
      },
      {
        name: 'Docker',
        imgSrc: docker
      },
      {
        name: 'Linux',
        imgSrc: linux
      },
      {
        name: 'Nginx',
        imgSrc: nginx
      },
      {
        name: 'Github Action',
        imgSrc: ga
      },
    ]
  }
]

type TechSkills = typeof techSkills;