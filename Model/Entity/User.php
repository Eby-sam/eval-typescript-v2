<?php
namespace Eby\Model\Entity;

use Eby\Model\Entity\AbstractEntity;

class User extends AbstractEntity {

    private string $name;
    private string $password;
    private string $email;
    private bool $numberProject;
    private bool $numberTaches;

    /**
     * @return bool
     */
    public function isNumberProject(): bool
    {
        return $this->numberProject;
    }

    /**
     * @param bool $numberProject
     */
    public function setNumberProject(bool $numberProject): void
    {
        $this->numberProject = $numberProject;
    }

    /**
     * @return bool
     */
    public function isNumberTaches(): bool
    {
        return $this->numberTaches;
    }

    /**
     * @param bool $numberTaches
     */
    public function setNumberTaches(bool $numberTaches): void
    {
        $this->numberTaches = $numberTaches;
    }


    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @return string
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * @param string $password
     */
    public function setPassword(string $password): self
    {
        $this->password = $password;
        return $this;
    }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @param string $email
     */
    public function setEmail(string $email): self
    {
        $this->email = $email;
        return $this;
    }

}