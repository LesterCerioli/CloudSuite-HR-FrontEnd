#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS with-node
RUN apt-get update
RUN apt-get install curl
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash
RUN apt-get -y install nodejs
RUN npm install -g @angular/cli

FROM with-node AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["CloudSuiteHR/CloudSuiteHR.Server/CloudSuiteHR.Server.csproj", "CloudSuiteHR/CloudSuiteHR.Server/"]
COPY ["cloudsuitehr.client/cloudsuitehr.client.esproj", "cloudsuitehr.client/"]
RUN dotnet restore "./CloudSuiteHR/CloudSuiteHR.Server/CloudSuiteHR.Server.csproj"
COPY . .
WORKDIR "/src/CloudSuiteHR/CloudSuiteHR.Server"
RUN dotnet build "./CloudSuiteHR.Server.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./CloudSuiteHR.Server.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CloudSuiteHR.Server.dll"]
