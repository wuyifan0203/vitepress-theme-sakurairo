/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-20 16:08:44
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-02-20 16:09:12
 * @FilePath: /vitepress-theme-sakurairo/src/assets/icon/jianshu.ts
 * Copyright (c) 2024 by wuyifan email: 1208097313@qq.com, All Rights Reserved.
 */
const jianshu = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAbPUlEQVR4nO3dT2wd1b3A8XMMNiWhxAlJWLxFXInFoxJqUKsum3SXrpq0OyeoQajtBik3T+qCtioGtY8FUnMjsXgtQqSCePceYfXY4fTtqj4RVKlvg4RZdEES8oc2SbETz/v9HAzGjH3vnPv7zT0z8/1INz5OoYw95349c+7ccQwA0BAEC0BjECwAjUGwADQGwQLQGAQLQGMQLACNQbAANAbBAtAYBAtAYxAsAI1BsIZ0tXd85na8s0+GnylCsT8WK9MyLFWEOC1/7JchOkDmw7WJGC7IcFNFjIsxTCyGdfaceu28fMAQojw679LJJw7EcGe6+DQuRREPBiETcEa+QTMBqM8FeVpek7m3Gr8iTlyLIV4oijvX9/bn5X/rtiiPzrjYm90fYvxGLIqZT6O0X7I0LR+BprhQhLCoMQvxnoV7i3ve3dk/c03+vhNaHSw9cgrFnYPECW2mAZMn8kKYiAuTxeR5CdhiaCn5OttD15mW4/KBYqU4LIfRB2VXEih0zmrAYjw3EYuF3afm35S/ao1WBOvyydnvr6zEnuyqgwHAOvGaPMvPTIbJ02048mpssORoano53v5RsbLSky9iJgDYkhx5yVHXxOk9/dcXQkNFeTTKaqiKpVOy6YdlF0zLXwGoQMK1GCfi3N5TZ/8gnzZKlEcjaKhuh6UTsoDek2/5tPwVgNFciHHiZJOOuBoRrIsnj8qpXzEnGzsTAJiSI65zU3HqZBPWuKI8srV63VQR5fSPxXTAXYx9WZx/TsJ1TT7LUrbButSbfbYowlwAUBs52lqMMRzJ9ar67IIla1Uzy8Xyq/KtOxgAjIVEa25Pf/45GWYlyiMbl3vHDq8UhcZqWj4FMFZxYTJOPimniIshE9kE6+KJWQlVOB4AZCRem4jxyd3918/JJ2M39mDJKeD0UrH0qmzIYfkUQI5ieFLWtc6EMZNOjI/GarlYeluG++UBIGcTE729p14/LaOxGVuw7l6yEF6VIbECmuPM3tPzT8rHsYjyqN3dWMW3WVwHGmls0YryqBWxAlphLNGK8qgNa1ZAq9QerSiPWhAroIVqfvWwtmBdPHFUYsXV60Dr1BitWoLFRaFAu8U48d06blPjHixZZD/+6eULAFqqCGFxKk49vtP5Tg+uwZJ1K30j8zvy5UzLpwBaTKJ17uHT80dk6MY1WHIqKLFikR3oihjjyT39s30ZunAL1oe92blYhGdlCKAz9Lf0FN+VRfgL8ok5l2Bd6h07WBQrb8sQQPdc2Ht6/nH5aM4lWJwKAt3mdWpoHixeFQQgabk2GSe/Zv2qoWmw5FXBaXlV8P3Aq4JA5xUxPPdwf34uGDINFgvtANabjFN6lLUYjJgFS46uuOYKwBcUxtdmmQXrYu/omVAUP5IhAHwuhsetLnMwCZYcXcna1dJVGQLAF8X4h739s8eDAZNgsXYFYCuylrVT1rKuyXAkNsE6Mfu+/B/NBAAoUUSbVwyjPEbCdVcABilCWJTF96/JcCRRHiPhxnwAhmJwo7+RgiWL7TOy2P6+DAFgS3Ja+KacFh6WYbKRgnWpd7RXFMUpGQLAQKMuvo8ULFm/WpCT0wMyBICBJuLEkd3918/JMElysOR0kGuvAFQTR7smKzlYl3vHDq8UK2/IEACGUoz4amGURxI5HezLf/2EDAFgaLKOlfyG6PRgcZO+TU0+8ujqw0Nx62a4df4tGXVDvH9buP/AIRn5+Oef/iesXLkkI9RmhMsbRgmWHN2hzI6nfxmmnIJ1U2J1443XZNQNU499K+x46qSMfFx+5serPwRQoxHWsZKCxT3bN6dHBLtfeFlGPq6++PNw+28fyKgbvjr70/CVb39HRvY++cv/ho9f+a2MULPke75HeVTG9Vebu0+eXA/Kk8zDnSuXw5XnT8ioOx564fdh4v7tMrL38fzvwid/+qOMUDcJVlJ7kv4l7n21Oc8jgn/Kk+vv8iTrinv/ZV/Y+bN/l5EPTgfHJ/VX26cFiwX3TXkeEVx/5VRY+sufZdQN2w79MGw/9AMZ2eN0cMwSF95Tg1XIB2zA6aCtXb/qh3t27ZGRPU4Hx6uIabebqRysq7zheVM7nv6FvDr4dRnZu/HWf4Wbb/2njLrB+3Two+d7XM4wTjGclyOsg6GiysHiFcJyE3Ik8JAcEXjp2hPMcy2Q08HxKxKveI/yqITbIZfjCWZHLw3R00GvtUBOB/OQ8kph5X+BYH2Z9xPs2ku/Dsvv/Z+MusFzLVDpdWwrt27IqNmuv/Qb+bO5Ut6iUzlYF7mlzJd4vprVVKNEVuPvtdjeJpd6R+XP5kq5tIFgjcj76KqpUoPlfXTVJk0PVsq9sSoHi9+Q80Wea1dNlhosjT9HV8NperCKhEsbojwq4Rqsz3m/MthkKcHi6KoagjUEgvU5z+uumi4lWBxdVdP0YEl9Tu/tz/dkNLRKwZL1q/2yfvWODDtP79H0wJEnZIQyVYPF97O6FgSr8sWjlYLFRaN36angzp/9hoX2LVQJFt/PNARrAIJ1l75lRN86gs1VCRan1mkI1gAEi2uuhjVssLzvKNpmjQ9WiNf2nj67UwZDqxSsrl/lzqtYwxsmWFzDNprmB6v623Mq/cNdDpb+Uonpp38pIwxjmGBxaj0agjVAV4OlTypdZ+FIYHiDgsUFt6MjWAN0MVjEKs1WweLU2gbBGqBrwaorVkubPLHXWP/KML1djd6xwJPef77s/l36PdVTQU/6ta0Mea923Z4JWUuzoP9N/W/X5br8UGi6qndsiPIYWpeCpRO5jlgN83sGH3zq38J9j31TRjY0WOO4v1Yd31MNZZVf1GF9wWrXbrQ4qqp3bKgUrIsduVNDXacsemQ1zE9Jj+2p+4lVR6z06EZPRav8Jhy9aNXy/aDD/ADC5wjWiLYfORa2HfiejHzpL5W4+uIzQz259OV/61/OWuc94uuIVZXv50Z6iqrbaEFvDPjRMz+REYZBsBLpT1q9gNFq4m5F1zr0yEqPCIZlfVp458qlcEWOsrzp0eED8kPAM1Yp38/1rE8LuQXz8AhWAr3a+quzP3F9Uq1JfXLpE9/6tND79xxuO/SDsP3QD2XkJ/X7uZ71Eaxuy9UXfy4jDEKwKtCjKv3pf58Eqw6jPLmsn1Sq6gL1sHRb9Tor7+/rKN/PjSxPC5UGy2K72o5gDUl/+uupQB1HVcriyWX9pPJYb9Ht01jpR08W38/1rN8jyuL7cAjWAPpEelDWquq8UZw+qaq+elVmu6yzbJPIWrI8LdQfAt6ngEq/n7rdlq9yWr/1qq41wqYjWANY/yQdxPK0y/pJpSy2T38I1HFUpXR7/yFHLqPGv8ye/ln5045G1eqHQVsRrAHqDJbHq0XWT6pRTws1UnqqWgfvSzGsX4nVuI76w6DtCNYAdQRLT1l0oupHazvkCMv6rTqjLBB7HPVtpOtV+v30Plqxnhuj/jDoAoI1gPWk3Mj7KMBjHWuUbfYOlr6N6O/z/+FyCriRx9eia5ebvQkcEiCCtTWvYOnbbPQowHIhuIzH9Vi67fqKWwqPJ7mq66hqPb3MxfJtOmqUHwZdQLAGsA6WviVEjwDq+inqtWZ0+ZkfJx3FeARL1368FtYHeeiFl4PV3RuUnmrrKTfKEawBrIKlobohPzmtF9WHYb3wrlJf0bIMlh7p6bVL+iQfF481wtQfBl1AsAYYNVjjDNUaPcLSIy1LqacuFsHS72mdR6lbGXV+lEn9YdAFBGuA1AmpP/31CZ3Dk8rjKEC/vpR1rFGCpUdSekX4OOO/Uer82ErqD4MuiDGelDOGoRcOCdYWdOFXfzLqhPNeTK/C45VClXLL3ZRgaRz1CZxD/DdK+XoG0TU5fQEBX1bE8NzD/fm5MCSCtcFapPTldP2Yo0FfQ6qUl+CHfYKvfV9zi/9Gw349VWigU45eu4BgDVD2ZNcnkz5RP5EnlD6pqiyQ6p0Jdv3qtOkrS0pfWdJTpjJ6Oxx947a1W3J6pl9/FYOe4Bp+/b7mdNq3Fd2fesW7NYJVjmANsBYsjYE+mZbf+6s8qh1VbLT2/2lpSbbr+ku/kVHeyoKlRxQaPv3+5nw0hfEjWAPoxYHFrRvyGP4oahD9qexxlOXxXkRrGiw9ItFArYXK8nuLdiNYY+JxlKXvRdNblOQcAI11ztuHvBGsMdEnrsdRli5S6ytqQBsRrDHq6lEWkIpgjRFHWUA1BGvMPC7q5CgLbUWwxkzf46fv9bM2zFGWx1t2MB7D7O82IFgZ0GBpuCzpUdagu1cSrPYgWOUIlgOPm+ypQddlEaz2IFjlCJYDr8V3vTpf37KzGYLVHgSrHMFyor/26itypGVtqzcoE6z2IFjlCJYTXcPStSxrW92qhGC1B8EqR7AcabA0XJZ08X2zSxwIVnsQrHIEy5HHle9qs8V3gtUeBKscwXKkR1d6lGVNb9vy8Su/ldEXEaz2IFjlCJYzfbXwnl27ZWTrIzkt3HivKYLVHgSrHMFy5vVqof7ePr1D6HoEqz0IVjmC5UxvZ7zjqZMyslV2TRbBag+CVY5g1WCPwy8+VRt/QSfBag+CVY5g1UBvIXzfY9+Uka2NrxYSrPYgWOUIVg28Lm/Y+GohwWoPglWOYNVAf1HDxt8sY0EvIl1/BweC1R4EqxzBqoG+GXr3Cy/LyN71V06t/qYajI/HGiXBKkewauJ1PdbN82+FG2+8JiOMC8FKR7Ay5bXwXnZ5A+pFsNIRrEzpr5Z/4MgTMrK38fIG1ItgpSNYmdL3FeovqPCgE3uze2TBH8FKR7CAmhGsdAQLqBnBSkewgJoRrHQEy4Be6GlJF8T11Ty0E8FKR7AMWE/AJVkQv/7Sr2WENrKeL4pglSNYJawnIMFqN+v5oghWOYJVwnoCEqx2s54vimCVI1glrCcgwWo36/miCFY5glXCegISrHazni+KYJUjWCWsJ6BnsLY53GerzfQdAfqwZD1fFMEqR7BKWE9Az2BZb2vbeYTAYx94bGeOCJYB6wlIsPLhEQKPfeCxnTkiWAasJyDByodHCDz2gcd25ohgGbCegAQrHx4h8NgHHtuZI4JlwHoCEqx8eITAYx94bGeOCJYB6wlIsPLhEQKPfeCxnTkiWAasJyDByodHCDz2gcd25ohgGbCegAQrHx4h8NgHHtuZI4JlwHoCEqx8eITAYx94bGeOCJYB6wlIsPLhEQKPfeCxnTkiWAasJyDByodHCDz2gcd25ohgGbCegAQrHx4h8NgHHtuZI4JlwHoCEqx8eITAYx94bGeOCJYB6wlIsPLhEQKPfeCxnTkiWAasJ2DTgnWpd1T+HL9th34YthvfPscjBB77wGM7c0SwDFhPQIKVhmDZbmeOCJYB6wlIsNIQLNvtzBHBMmA9AQlWGoJlu505IlgGrCcgwUpDsGy3M0cEy4D1BCRYaQiW7XbmiGAZsJ6ABCsNwbLdzhwRLAPWE5BgpSFYttuZI4JlwHoCEqw0BMt2O3NEsAxYT0CClYZg2W5njgiWAesJSLDSECzb7cwRwTJgPQEJVhqCZbudOSJYBqwnIMFKQ7BstzNHBMuA9QQkWGkIlu125ohgGbCegAQrDcGy3c4cESwD1hOQYKUhWLbbmSOCZcB6AhKsNATLdjtzRLAMWE9AgpWGYNluZ44IlgHrCdi0YN3I5Iky+cijYeqRr8vIjkcIfPaB/XbmiGAZsJ6ATQtWm3mEwGMfeGxnjgiWAesJSLDy4RECj33gsZ05IlgGrCcgwcqHRwg89oHHduaIYBmwnoAEKx8eIfDYBx7bmSOCZcB6AhKsfHiEwGMfeGxnjgiWAesJSLDy4RECj33gsZ05IlgGrCcgwcqHRwg89oHHduaIYBmwnoAEKx8eIfDYBx7bmSOCZcB6AhKsfHiEwGMfeGxnjgiWAesJSLDy4RECj33gsZ05IlgGrCcgwcqHRwg89oHHduaIYBmwnoAEKx8eIfDYBx7bmSOCZcB6AhKsfHiEwGMfeGxnjgiWAesJ2LRgcXuZajz2gcd25ohgGbCegAQrDcGy3c4cESwD1hOQYKUhWLbbmSOCZcB6AhKsNATLdjtzRLAMWE9AgpWGYNluZ44IlgHrCUiw0hAs2+3MEcEyYD0BCVYagmW7nTkiWAasJyDBSkOwbLczRwTLgPUEJFhpCJbtduaIYBmwnoAEKw3Bst3OHBEsA9YTkGClIVi225kjgmXAegISrDQEy3Y7c0SwDFhPQIKV5quzPw1f+fZ3ZGTHIwQe+8BjO3NEsAxYT0CClWbH078MU488KiM7HiHw2Ace25mlGJ7c258/E4ZEsEpYT0CCleahF34fJu7fLiM7HiHw2Ace25mjGCe+u6f/+kIYEsEqYT0BCVZ1U499K+x46qSMbHmEwGMfeGxnjgiWAesJSLCq2/H0L+R08OsysvWPN14Lt86/JSM7HvuAYJUjWCWsJyDBqub+A4fCA0eekJG9a7IflmV/WPLYBwSrHMEqYT0BCdbwPGOlrr7483D7bx/IyI7HPiBY5aI8hkaw0hCsrU3s2hMmH/nXsO3A98K9/7JP/saPx9fmsQ8IVjmCVcJ6AjYtWEvv/VX+rIfHOtVmvPaDxz4gWOUIVgnrCej1RFHW29pmN2Wx/YYsulvz2AcEqxzBKmE9AQlWHjzWr5THPiBY5aI8hkaw0hCs8btz5XK48vwJGdnz2AcEqxzBKmE9AQnW+H08/7vwyZ/+KCN7HvuAYJUjWCWsJyDBGi89urr64jOhuHVTPrPnsQ8IVjmCVcJ6AhKs8br+yqmw9Jc/y8iHxz4gWOUIVgnrCUiwxuefchr4dzkd9OSxDwhWOYJVwnoCEqzx0FcE9a04XqeCazz2AcEqR7BKWE9AglW/umKlPPYBwSpHsEpYT0CCVS89DdS7MtQRK+WxDwhWuUrB+rA3OxeL8KwMW816AhKseuirgRoqzwX2jeL928LuF16WkS2CVY5glbCOAMHypaG6df6/V4+s6jqqWtOkGw3maDJO7dzZP3NNhkMhWCWsI0Cw7OkalX5f9WJQHY+Lxy/KUF0J1t7T81E+DK3SP0yw0ugTyytY+osa2mzlyqXVIyh1R8b6ufUN+FLp6eCuX/XN7zuvCFa5Sv8wwUrjGSyMz4NyKnifnBJ60Fc4cwmzJ4JlgGBhEK9TwTVed5bIjWuwLvWOHSyKlbdl2GoEC5uZfOTRsO3QD9xvPOhxZ9TcFDF88HB/fiZUQLBKEKx2uU+OhO7ZtVtGw7u7XnZ59ZbNulZ1z+ptnB9d/ehNj6z0CKv1Yji/tz9/MFRAsEoQrHbRFyasf4O0J687o2bHO1gXe7P7QxHekWGrEax2aVqwvO8ukQ3vYKmLJ2YL+dBqBKtdmhSslVs3w0fP/FhGHRDDaQlWT0ZDI1glCFa7NClYerW+9+1wciGL7s/JovtcqKBysD7szS7GIuyTYWsRrHZpUrA+er4ni/2XZNR+tQRL1rEWZB3rgAxbi2C1S1OC1aWjK1X1jc+KYJUgWO3ShGDp2pX+Vp+637w9TrUES04J5+SU8FkZthbBapcmBKszrwyuU/VODYpglSBY7ZJ7sDpz3dUGVd+Woyr/C124eJRgtUvOwerautVnYnx3b//sfhlVUjlYV3vHZ5aLpfdl2FoEq11yDVZXbiFTRl4hfFNeITwsw0oqB0u1/VosgtUuuQVLF9g/fuW3nbh9zGYkWJUvaVBpweodvRCK4hsybCWC1S65BEtDdUvWq/R2zl16NbBUDE/u7c+fCRWlBuuMBOtHMmwlgtUu4w6W3jFV16oI1ToxPC7BuiCjSpKCdal3tFcUxSkZthLBapdxBEv3uZ7y6aUKersYfFHKK4Qq6V9q+yuFBKtdth95YvW+Vtb0aGl9jJbf++uX/g4lEu7SsCbKI0mbF94JFuAo4S4Na9KD1eKFd72zpCV+6gKfm4gTR3b3Xz8nw8qiPJJc7M32QxFOyBAAhpbylpw1ycG63Dt2eKVYeUOGADCcxCvc1yQH62rv+PRysXRVhgAwnBHWr1RysJScFi7IaeEBGQLAQKOsX6mRgtX267EA2Eq9/mrNSP+ynBa2/o3QAGwUiW94Xm+kYClOCwEMI+UOoxuNHCxeLQQwiBxdfSBHVzNhRCMHS33Ygd+kA2AEiXdn2MgkWCy+A9hUDNcnw9RM6sWi65kESxbfp5fD0qKsZe2QTwHgcyNee7WeSbDUxV6775EFIM1knPqaHF0tBgNmweIoC8CXGB5dKbNgKVl8n5PF92dlCKDrDNeu1pgGS0m0FiVa+2QIoMNijCf39M/2ZWjGPFgXe7PH5bTwVRkC6Cir6642Mg+WkmgtSLQOyBBAB1lc1V7GK1j7JVjvyBBAx8jR1cjvGdyMS7AUF5MC3SOx+mAqTO23XGhfzy1YSo60FuRIi1NDoCO8TgXXuAaLa7OA7pCjq+fkVHAuOHINluJuDkAHxNHu1T4s92ApOTXsy1HWCRkCaJu4eoGorlstBme1BEvxXkOghSRW8ufBvf35C/LRXW3BUnKktSBHWgdkCKAFvBfZN6o1WHcX4ZclWu38jdFApxjdlK+KWoOliBbQAmOIlao9WEqiNSPROke0gObxeFPzsMYSLCXR4kgLaJoxHVmtGVuwlEZrKSydiUX4vnwKIFfyamAME4frXGAvM9ZgreGSByBjEiv5s7ZLF7aSRbDUhz3uVgpkJ8Z3QyiO5xArlU2w1MXe7P4ihHMSrn3yKYBxMr4fu4WsgqV0XUsW4/ucIgJjEvNYryqTXbDWrL5pOqycCdzpAahNEcObU2Hq+E6n+1mNKttgKTnampGjrTmOtgBfEqoPJAZzcgp4JmRMtjF/l3rHDhZhZS7wPkTAlpz+FSH0ve9jZaURwVqjp4l3wkqfRXnAQIx/mAyTvVxP/8o0Klhr5NXE44UcvhIuIMHdUM1JqBZDwzQyWGv0VHElrPQkXN+XTwFsQteo5MMZWVDvS6gac0S1UZRH491dnF/qFSEclnjtk78CICRUb8qT/Fzui+nDkq+lXeR0cX+h4QrhYGCRHh0jgZJX++KCjBYmw9S5Jh9NlZHndXvJkdf0nXD7oCzU75cv9CABQ9usBUrm94VCIiVHUhfkr1tLvs5u0SOwiTAx81nEQpwO3OIGuYvhuvwpMYqLMm/144V7w70X2nYENYh87VByNDZzO9yeKcLKTBHCTBBxNWif2R+46h4eYnxXjpU+DU9cLEKxGIT8YF0IIse3yIyLPCeRYi1wYRPrw4duWQvNZghQuigPAGgEggWgMQgWgMYgWAAag2ABaAyCBaAxCBaAxiBYABqDYAFoDIIFoDEIFoDG+H9NIKNZydT6zQAAAABJRU5ErkJggg==';

export { jianshu }