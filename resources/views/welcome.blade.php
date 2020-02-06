<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Favicon -->
        <link href="{{asset('/assets/img/brand/favicon.png')}}" rel="icon" type="image/png">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">

        <!-- Icons -->
        <link href="{{asset('/assets/vendor/nucleo/css/nucleo.css')}}" rel="stylesheet">
        <link href="{asset('/assets/vendor/font-awesome/css/font-awesome.min.css')}" rel="stylesheet">

        <!-- Argon CSS -->
        <link type="text/css" href="{{asset('/assets/css/argon.css')}}" rel="stylesheet">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <script type="text/javascript">
            window.csrf_token = "{{ csrf_token() }}"
        </script>
    </head>
    <body>
        <div id="app">
            <app></app>
        </div>
    </body>
    <!-- Core -->
    <script src="{{ asset ('/assets/vendor/jquery/jquery.min.js')}}"></script>
    <script src="{{ asset ('/assets/vendor/popper/popper.min.js')}}"></script>
    <script src="{{ asset ('/assets/vendor/bootstrap/bootstrap.min.js')}}"></script>
    <!-- Theme JS -->
    <script src="{{ asset ('/assets/js/argon.js')}}"></script>

    <script src="{{ mix('js/app.js') }}"></script>
</html>
