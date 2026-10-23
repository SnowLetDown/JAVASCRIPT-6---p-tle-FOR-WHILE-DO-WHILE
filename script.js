

function zadanie1()
{
    for(let i = 1; i <= 10; i++)
    {
        document.write(i + " ")
    }
    document.write("<br>")
}



function zadanie2()
{
    for(let i = 10; i >= 1; i--)
    {
        document.write(i + " ")
    }
    document.write("<br>")
}



function zadanie3()
{
    let suma = 0

    for(let i = 1; i <= 10; i++)
    {
        suma += i
    }

    document.write("Suma: " + suma + "<br>")
}


function zadanie4()
{
    for(let i = 2; i <= 20; i += 2)
    {
        document.write(i + " ")
    }
    document.write("<br>")
}


function zadanie5()
{
    let X = Number(prompt("Podaj liczbę miesięcy"))
    let Y = Number(prompt("Podaj miesięczną wpłatę"))
    let suma = 0

    for(let i = 1; i <= X; i++)
    {
        suma += Y
        suma *= 1.08
    }

    document.write("Zgromadzona kwota: " + suma.toFixed(2) + " zł<br>")
}


function zadanie6()
{
    let suma = 0
    let a = 5

    for(let i = 1; i <= 100; i++)
    {
        suma += a
        a += 10
    }

    document.write("Suma: " + suma + "<br>")
}


function zadanie7()
{
    let suma = 0

    for(let i = 10; i >= 1; i--)
    {
        suma += i * i
    }

    document.write("Liczba cegieł: " + suma + "<br>")
}


function zadanie8()
{
    let X = Number(prompt("Podaj liczbę cegieł w dolnym rzędzie"))
    let Y = Number(prompt("Podaj liczbę rzędów"))
    let Z = Number(prompt("O ile cegieł skraca się każdy rząd"))
    let suma = 0
    let cegly = X

    for(let i = 1; i <= Y; i++)
    {
        suma += cegly
        cegly -= Z
    }

    document.write("Liczba cegieł: " + suma + "<br>")
}


function zadanie9()
{
    let X = Number(prompt("Podaj liczbę cegieł w dolnym rzędzie"))
    let Y = Number(prompt("Podaj liczbę rzędów"))
    let Z = Number(prompt("O ile cegieł skraca się każdy rząd"))
    let K = Number(prompt("Podaj wagę jednej cegły w kg"))
    let suma = 0
    let cegly = X

    for(let i = 1; i <= Y; i++)
    {
        suma += cegly
        cegly -= Z
    }

    let waga = suma * K

    document.write("Liczba cegieł: " + suma + "<br>")
    document.write("Waga ściany: " + waga + " kg<br>")
}


function zadanie10()
{
    let a = Number(prompt("Podaj pierwszą liczbę"))
    let b = Number(prompt("Podaj drugą liczbę"))
    let znak = prompt("Podaj działanie: +, -, *, /")

    if(znak == "+")
    {
        document.write("Wynik: " + (a + b) + "<br>")
    }
    else if(znak == "-")
    {
        document.write("Wynik: " + (a - b) + "<br>")
    }
    else if(znak == "*")
    {
        document.write("Wynik: " + (a * b) + "<br>")
    }
    else if(znak == "/")
    {
        if(b != 0)
        {
            document.write("Wynik: " + (a / b) + "<br>")
        }
        else
        {
            document.write("Nie można dzielić przez zero<br>")
        }
    }
    else
    {
        document.write("Nieprawidłowe działanie<br>")
    }
}


function zadanie11()
{
    let N = Number(prompt("Podaj liczbę elementów"))
    let X = Number(prompt("Podaj pierwszy element"))
    let Y = Number(prompt("Podaj różnicę"))

    let a = X

    for(let i = 1; i <= N; i++)
    {
        document.write(a + " ")
        a += Y
    }

    document.write("<br>")
}


function zadanie12()
{
    let a
    let b
    let suma

    do
    {
        a = Number(prompt("Podaj pierwszą liczbę"))
        b = Number(prompt("Podaj drugą liczbę"))

        suma = a + b

        document.write("Suma: " + suma + "<br>")
    }
    while(suma != 0)
}


function zadanie13()
{
    let n = Number(prompt("Podaj liczbę"))
    let silnia = 1

    for(let i = 1; i <= n; i++)
    {
        silnia *= i
    }

    document.write("Silnia: " + silnia + "<br>")
}


function zadanie14()
{
    let n = Number(prompt("Podaj liczbę elementów"))
    let a = Number(prompt("Podaj pierwszą liczbę"))

    for(let i = 1; i <= n; i++)
    {
        document.write(a + " ")
        a = a * a
    }

    document.write("<br>")
}


function zadanie15()
{
    let suma = 0

    for(let i = 1; i <= 10; i++)
    {
        let a = Math.floor(Math.random() * 51) + 50

        document.write(a + " ")
        suma += a
    }

    let srednia = suma / 10

    document.write("<br>")
    document.write("Suma: " + suma + "<br>")
    document.write("Średnia: " + srednia + "<br>")
}
