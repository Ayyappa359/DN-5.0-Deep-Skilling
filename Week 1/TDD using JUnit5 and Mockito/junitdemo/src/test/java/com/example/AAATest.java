package com.example;

import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;

public class AAATest {

    private int num1;
    private int num2;

    // Setup method
    @Before
    public void setUp() {
        num1 = 10;
        num2 = 20;
        System.out.println("Setup executed");
    }

    // Test using AAA Pattern
    @Test
    public void testAddition() {

        // Arrange
        int expected = 30;

        // Act
        int actual = num1 + num2;

        // Assert
        assertEquals(expected, actual);
    }

    // Teardown method
    @After
    public void tearDown() {
        System.out.println("Teardown executed");
    }
}