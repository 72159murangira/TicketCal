$(document).ready(function() {
    let adultCount = 0;
    let childCount = 0;

    // Increase adult count
    $('#adultPlus').click(function() {
        if (adultCount < 4) {
            adultCount++;
            updateDisplay();
        }
    });

    // Decrease adult count
    $('#adultMinus').click(function() {
        if (adultCount > 0) {
            adultCount--;
            updateDisplay();
        }
    });

    // Increase child count
    $('#childPlus').click(function() {
        if (childCount < 5) {
            childCount++;
            updateDisplay();
        }
    });

    // Decrease child count
    $('#childMinus').click(function() {
        if (childCount > 0) {
            childCount--;
            updateDisplay();
        }
    });

    function updateDisplay() {
        $('#adultCount').text(adultCount);
        $('#childCount').text(childCount);

        // Validate that at least one adult is booked if there are children
        if (childCount > 0 && adultCount === 0) {
            $('#priceDisplay').text('You must book at least 1 adult if you book a child.');
            return;
        }

        // Calculate price
        let totalPrice = 0;

        if (adultCount === 2 && childCount === 3) {
            totalPrice = 30; // Family price
        } else {
            totalPrice += adultCount * 10; // Adult price
            totalPrice += childCount * 5; // Child price
        }

        // Display result
        $('#priceDisplay').text(`Total Price: €${totalPrice}`);
    }
});
