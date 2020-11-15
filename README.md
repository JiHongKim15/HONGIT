---
typora-root-url: .\image
---

# Hongit Homepage

:computer: kakao oven

> https://ovenapp.io/view/k4ze2Xvqqc8fO67XXPuB7kagNLL88CiE/

:page_with_curl: paper prototype

![image-20201111160229271](../image/image-20201111160229271.png)

## 환경

### 1. AWS

- #### Lambda

- #### API Gateway --> Zappa가 역할을 대신

- #### Dynamodb

  ###### boto3

  > dynamodb crud [https://medium.com/jhseo/boto3%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-dynamodb-query-d96f3b441f76](https://medium.com/jhseo/boto3를-이용한-dynamodb-query-d96f3b441f76)

  - Dynamodb와 Python연결

### 2. Python

- Django 설치

  > cmd로 설정 https://doorbw.tistory.com/181
  >
  > Django 시작 https://tothefullest08.github.io/django/2019/02/11/django01/
  >
  > Django 기초 http://pythonstudy.xyz/python/article/305-Django-App
  
- Flask 실행

  > [https://medium.com/@mystar09070907/flask%EB%A1%9C-get-post-%EC%9A%94%EC%B2%AD-%EB%B3%B4%EB%82%B4%EA%B8%B0-1-57d8f4559793](https://medium.com/@mystar09070907/flask로-get-post-요청-보내기-1-57d8f4559793)

### 3. Zappa

> Serverless 구축을 가능하게 해주는 Python Package

- API Gateway 자동 설정
- Django, Flask 활용 --> 디버깅 가능

:link: https://sshkim.tistory.com/172

zappa test https://hidekuma.github.io/serverless/aws/lambda/apigateway/zappa/python-zappa/

:warning: **설치 에러 kappa (0.6.0)**

> https://m.blog.naver.com/PostView.nhn?blogId=skykbc&logNo=221370634678&proxyReferer=https:%2F%2Fwww.google.com%2F

- 2020.11.12 현재 python 3.9 version에서 작동:x:

:warning: **zappa deploy Error**

> This application is already deployed - did you mean to call update?
>
> 이미 업로드 되어있음

###### 가상 환경 venv

- 설치된 라이브러리들의 복사본을 만들어서 독립적인 가상 환경 구축

  - 하나의 기기에서 여러개의 프로젝트가 가지는 다른 의존성을 다룰 수 있음

- 설치

  > https://dgkim5360.tistory.com/entry/python-virtualenv-on-linux-ubuntu-and-windows

- 윈도우에서 venv 사용법

  > https://hcnoh.github.io/2019-06-19-windows-python-virtualenv

###### AWS CLI

> https://lovit.github.io/aws/2019/01/30/aws_s3_iam_awscli/

- aws 계정을 연동해야 zappa 사용가능
- cli 다운로드
- secret access key를 다운받아서 접근



### 4. React

- AWS에 React 배포

> https://velog.io/@leejh3224/%EC%B2%AB-%ED%8F%AC%EC%8A%A4%ED%8A%B8-%EA%B0%9C%EC%8B%9C-AWS-S3%EC%97%90-React-%EC%95%B1-%ED%98%B8%EC%8A%A4%ED%8C%85%ED%95%98%EA%B8%B0-vpjmq1glm8