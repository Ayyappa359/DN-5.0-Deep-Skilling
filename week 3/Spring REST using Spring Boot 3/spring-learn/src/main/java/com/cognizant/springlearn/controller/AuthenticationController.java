package com.cognizant.springlearn.controller;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

import javax.crypto.SecretKey;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String,String> authenticate(
            @RequestHeader("Authorization") String authHeader){

        LOGGER.info("START");

        LOGGER.debug(authHeader);

        String user = getUser(authHeader);

        String token = generateJwt(user);

        Map<String,String> map = new HashMap<>();

        map.put("token", token);

        LOGGER.info("END");

        return map;
    }

    private String getUser(String authHeader){

        String encoded = authHeader.substring(6);

        byte[] decoded =
                Base64.getDecoder().decode(encoded);

        String credentials =
                new String(decoded, StandardCharsets.UTF_8);

        return credentials.substring(0, credentials.indexOf(":"));
    }

    private String generateJwt(String user) {

    SecretKey key = Keys.hmacShaKeyFor(
            "mysecretkeymysecretkeymysecretkey12"
                    .getBytes(StandardCharsets.UTF_8));

    return Jwts.builder()
            .subject(user)
            .issuedAt(new Date())
            .expiration(new Date(System.currentTimeMillis() + 1200000))
            .signWith(key)
            .compact();
}
}