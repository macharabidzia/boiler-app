# BoilerApp

The App Guide

# Core

Core Models and Core Services are type of models and services which are implemented for functional part of app

# Shared

Shared Models services and etc are global types which go from page to page usage

# Feature

Every feature has its components and service and model for features which are developed only for this feature.

# Config

Configuration of app, (won't need to touch this mostly)

# Layouts

Layouts which are global types for every pages (header,footer,sidenav).


# Sum up
Core is Global and implemented on app root level.
Core provides functionality for our app to work perfectly.
Shared is Global but implemented for certain features.
Shared provides components, directives,pipes which are implemented ON MULTIPLE FEATURES.
Features are Views with feature based components,service and models which are used only for this feature.