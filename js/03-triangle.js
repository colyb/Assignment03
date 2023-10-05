/*
Looping a Triangle

Write a loop that displays the following triangle within a console window:

#
##
###
####
#####
######
#######
*/
var poundSign = ""

for (let i = 1; i <= 7; i++)
{
    poundSign += "#"
    console.log(poundSign)
    //console.log("#".repeat(i))
}
