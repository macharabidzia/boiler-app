# BoilerApp

The App Guide

# Core

Core Models and Core Services are type of models and services which are implemented for functional part of app

# Shared

Shared Models services and etc are global types which go from page to page usage

# Feature

Every feature has its components and service and model for features which are developed only for this feature.

# Config

Configuration of app

# Layouts

Layouts which are global types for every pages (header,footer,sidenav).

# Overall Idea

Shared functionality will be shared throught every page, feature functionality is for certain feature, core functionality is for core management which is provided on app level and every feature can use it(core models and services are for core functionals and can be implemented everywhere) for example (user management, login, register, privilegies).
every page needs access for User (in most cases) that's why it's provided on app level.
in idea core is shared, why we need Shared than ?
Shared provides certain components and functionality which are shared on certain Multi FEATURES! if 2 features want to talk to each other or they use same component or directive or etc, that's where Shared comes in.
