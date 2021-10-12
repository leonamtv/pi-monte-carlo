#include <iostream>
#include <random>
#include <cmath>

int main () {

    int inside = 0;
    const int total = 100000000;

    std::default_random_engine generator;
    std::uniform_real_distribution<double> distribution(-1.0,1.0);

    for ( int i = 0; i < total; ++i ) {
        double x = distribution(generator);
        double y = distribution(generator);
        double d = std::sqrt( x*x + y*y );
        if ( d <= 1.0 ) 
            inside ++;
    }

    std::cout << "Inside: " << inside << std::endl;
    std::cout << "Outise: " << ( total - inside ) << std::endl;
    std::cout << "Pi....: " << ( 4 * inside / (double) total ) << std::endl;


}