FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src

COPY Classrooms.Api/Classrooms.Api.Domain/Classrooms.Api.Domain.csproj Classrooms.Api/Classrooms.Api.Domain/
COPY Classrooms.Api/Classrooms.Api.BusinessLogic/Classrooms.Api.BusinessLogic.csproj Classrooms.Api/Classrooms.Api.BusinessLogic/
COPY Classrooms.Api/Classrooms.Api.DataAccess/Classrooms.Api.DataAccess.csproj Classrooms.Api/Classrooms.Api.DataAccess/
COPY Classrooms.Api/Classrooms.Api.Web/Classrooms.Api.Web.csproj Classrooms.Api/Classrooms.Api.Web/
RUN dotnet restore Classrooms.Api/Classrooms.Api.Web/Classrooms.Api.Web.csproj
COPY . .
WORKDIR /src/Classrooms.Api/Classrooms.Api.Web/
RUN dotnet build -c Release -o /app

FROM build AS publish
RUN dotnet publish Classrooms.Api.Web.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Classrooms.Api.Web.dll"]